const fs=require('fs');
const is=require('image-size');
const lineByline=require('n-readlines');

const temp=fs.readFileSync('./template.xml').toString();
//console.log(temp);

fs.readdir('./images', (err, dir)=>{
    if(err)
        throw err;

    //console.log(dir);
    dir.forEach(async (value)=>{
        const title=value.replace(/jpg/, 'txt');
        const xmls=value.replace(/jpg/, 'xml');
        const liner=await new lineByline(`./annotations/${title}`);
        let line, newXml;

        while(liner.next()){
            const dim=await is(`./images/${value}`);
            //console.log(dim, value);
            newXml=temp.replace(/names.jpg/g, value)
                .replace(/widthes/, dim.width)
                .replace(/heights/, dim.height);
            //console.log(newXml);

            for(let i=1;i<=7;i++){
                line=liner.next().toString().trim().split(' ');
                //console.log(line, title);

                const regClass=new RegExp(`class${i}`);
                const regTLX=new RegExp(`top_left_x${i}`);
                const regTLY=new RegExp(`top_left_y${i}`);
                const regBRX=new RegExp(`bottom_right_x${i}`);
                const regBRY=new RegExp(`bottom_right_y${i}`);
                newXml=newXml.replace(regClass, line[4])
                    .replace(regTLX, line[0])
                    .replace(regTLY, line[1])
                    .replace(regBRX, line[2])
                    .replace(regBRY, line[3]);
            }
            //console.log(newXml);

            await fs.writeFileSync(`./xmls/${xmls}`, newXml);
        }
    });
});
