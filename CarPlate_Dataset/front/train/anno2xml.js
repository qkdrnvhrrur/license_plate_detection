const fs=require('fs');

//fs.readFile('./template.xml', 'utf8', (err, temp)=>{
//    console.log(temp.toString());
//});

fs.readdir('./annotations', (err, dir)=>{
    if(err){
        throw err;
    }

    //console.log(dir);
    dir.forEach((value)=>{
        fs.readFile(`annotations/${value}`, 'utf8', async (err, txtFile)=>{
            //console.log(txtFile.toString());
            datas=await txtFile.toString().trim().replace(/1\r\n/, '').split(' ');
            //console.log(datas);
    
            const name=await value.replace(/.txt/, '');
            //console.log(name);
    
            let temp=await fs.readFileSync('./template.xml', 'utf8').toString();
            //console.log(temp);
    
            let newData;
            newData=await temp.replace(/names/g, name)
                .replace(/top_left_x/, datas[0])
                .replace(/top_left_y/, datas[1])
                .replace(/bottom_right_x/, datas[2])
                .replace(/bottom_right_y/, datas[3]);
            //console.log(newData);
    
            await fs.writeFile(`xmls/${name}.xml`, newData, (err)=>{
                if(err)
                    throw err;
            });
        });
    });
});
