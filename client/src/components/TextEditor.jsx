import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({value,userData,setUserData,target}) => {

  function handleChange(e) {
    setUserData({ ...userData, [target]: e });
  }


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline']              
    ]
  };

  
  
  return (
    <ReactQuill 
    theme="snow" 
    value={value} 
    onChange={handleChange} 
    modules = {modules} 
    className="w-full px-3 py-2 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
    />
  ) 
}

export default TextEditor;