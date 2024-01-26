const fs=require('fs');
//check if the file exists
if(fs.existsSync('myfile.txt')){
    let lineCount=0;
    let textLines=[];
    const readableStream=fs.createReadStream('myfile.txt','utf-8');
    readableStream.on('data',(chunk)=>{
       const lines=chunk.toString().split(/\r?\n/);//read a line
       console.log(lines.length)
       const cleanedLines=lines.filter((line)=>line.trim().length>0);
       textLines=[...cleanedLines];
       //do whatever the fuck you want with your lines
     
    })

    readableStream.on('end',()=>{
        console.log(textLines.length)
        console.log(textLines);

       readableStream.close();
    })

    readableStream.on('error',(err)=>{
       console.error(err)
    })

}else{
    console.error('file does not exist');
}
