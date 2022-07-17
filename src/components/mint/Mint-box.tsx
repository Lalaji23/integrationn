import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMoralis, useMoralisFile } from "react-moralis";
import { TransactionContext } from "store/context/TransactionContext";
import { createCollectible } from "utils/methods";

import "./Mint-box.css";

type FormValues = {
  name: string;
  description: string;
  brand: string;
  size: string;
  image: File[];
};

export default function Mintt() {
  const { saveFile } = useMoralisFile();
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const { provider, account, chainId, isAuthenticated, authenticate } =
    useMoralis();
  const [image, setImage] = useState("");
  const { setTransaction } = useContext(TransactionContext);

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values);
      setTransaction({ loading: true, status: "pending" });
      const file = values.image[0];
      const imageFileIpfs = await saveFile(file.name, file, { saveIPFS: true });
      const imageCid: any = imageFileIpfs.toJSON();

      const formValues = {
        ...values,
        image: imageCid.ipfs,
      };

      const fileIpfs = await saveFile(
        "metadata.json",
        {
          base64: btoa(JSON.stringify(formValues)),
        },
        { saveIPFS: true }
      );
      const fileCid: any = fileIpfs.toJSON();
      console.log(fileCid.hash);
      await createCollectible(account, provider, chainId, fileCid.hash);
      console.log(fileCid.ipfs);
      setTransaction({ loading: true, status: "success" });
    } catch (error) {
      console.log(error);
      setTransaction({ loading: true, status: "error" });
    }
  });

  return (
    <div className="mint-container">
      <form onSubmit={onSubmit}>
        <div className="mint-parent">
          <div className="mint-header">
            <div className="header-left">
              <div
                className="header-left-child"
                style={{
                  display: "grid",
                  placeItems: "center",
                  height: "100%",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt=""
                    style={{
                      height: "150px",
                      width: "250px",
                      objectFit: "contain",
                    }}
                  />
                ) : null}
              </div>
            </div>
            <div className="header-right">
              <input
                name="itemName"
                placeholder="Item name"
                {...register("name", { required: true })}
              ></input>
              <form>
                <select
                  name="brand"
                  id="brand"
                  {...register("brand", { required: true })}
                >
                  <optgroup label="Brand" placeholder="Brand">
                    <option value="brand">Brand</option>
                    <option value="brand">Brand</option>
                  </optgroup>
                </select>
              </form>
              <form>
                <select
                  name="size"
                  id="size"
                  {...register("size", { required: true })}
                >
                  <optgroup label="size" placeholder="size">
                    <option value="">Size</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                  </optgroup>
                </select>
              </form>
            </div>
          </div>
          <div className="mint-footer">
            <div className="footer-left">
              <label
                style={{
                  height: "fit-content",
                  padding: "10px",
                }}
                htmlFor="file"
              >
                Upload
              </label>
              <input
                id="file"
                type={"file"}
                style={{ display: "none" }}
                onChange={({ target }) => {
                  if (!target.files.length) return;
                  const file = target.files[0];
                  setValue("image", [file], { shouldValidate: true });
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
            <div className="footer-right">
              <textarea
                name="comment"
                placeholder="description"
                {...register("description", { required: true, max: 250 })}
              ></textarea>

              {!isAuthenticated ? (
                <button onClick={() => authenticate()} className="mint-btn">
                  Connect Wallet
                </button>
              ) : (
                <button type="submit" className="mint-btn">
                  Mint
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
