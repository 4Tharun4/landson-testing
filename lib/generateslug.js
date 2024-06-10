
export  function generateslug(title) {
    const slug = title
    .toLowerCase()
    .replace(/\s+/g,"-")
    .replace(/[^\w\-]+/g,"")
    .replace(/\-\-+/g,"-")
    .replace(/^\-+/,"")
    .replace(/\-+$/,"");

    
  return  slug;
   
  
}