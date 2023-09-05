import React, { useState } from "react";
import AccessStorage from "../hooks/AccessStorage";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const { startUpload, listImages, allimages } = AccessStorage();
  console.log({ allimages });

  const changeHandle = (e) => {
    // 1- access the userselect file
    let selected = e.target.files[0];
    
    //2- now store the picture local piece of state
    //will use useState
    if (selected && types.includes(selected.type)) {
      setFile(selected);

      setError("");
      //3- now to communicate with the Firebase Storage Import the configure Firebase projectStorage
      // keep the firebase logic seperate, will use another Component Hooks->AccessStorage
    } else {
      setFile(null);
      setError("please select png or jpeg");
    }
  };


  //upload image to Firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    startUpload(file);  
    setFile("");
  };



  //show images
  const handleFetchAll = (e) => {
    e.preventDefault();
    listImages();
  };



  return (
    <>
   
    <div className="w-[700px] m-20 border p-2 flex flex-col justify-center gap-2 dark:bg-slate-700 ">
    <button>
      <ion-icon name="cloud-upload-outline" className="text-2xl"></ion-icon>
    Upload Images 
      </button>
      <form>
        <input type="file" onChange={changeHandle} />
        <div className="output">
          {error && <div className="errorMsg">{error}</div>}
        </div>
        <button className=" p-2" onClick={handleSubmit}>
          Upload
        </button>
        {/* {file && <ProgressBar file={file} setFile={setFile} /> : null} */}
      
        <button className=" p-2" onClick={handleFetchAll}>
          show images
        </button>
      
      </form>
    </div>
      <div className="flex justify-center flex-wrap w-[1240px] mx-auto gap-10 bg-slate-900 text-white dark:bg-slate-300 dark:text-black duration-100">
        {allimages.length ? (
          allimages.map((url) => {
            return <img src={url} alt="" className="w-32" />;
          })
        ) : (
          <p className="">No images to display.</p>
        )}
      </div>
    </>
  );
};

export default UploadForm;
