var hp = 1000;
let kon = true;
let count = 1;


//contoh function
function serang() {
    console.log("Nyawa Bos tersisa: " + hp);


    //contoh while
    while (hp > 0) {
        let hit = prompt("1. SERANG Lagi");


        
        //contoh nested if
        if (hit === "1") { 
            hp = hp - 300;
            console.log("Nyawa Bos tersisa: " + hp);




            //contoh if else
            if (hp <= 500) {
                console.log("Bos hampir dikalahkan!");
            }else if(hp <= 0){
                console.log("Bos telah dikalahkan!");
             break;
        }
        }
    }
}


//contoh do while
do {
    console.log("Selamat datang di game");
    console.log("Nyawa Bos: " + hp);
    let pil = prompt("1. Main, 2. Exit");

    //contoh switch case
    switch (pil) {
        case "1": 
            hp = 1000;
            serang();
            break;
        case "2": 
            kon = false;
            break;
    }
    //contoh while
    for (let i = 0; i < count; i++) { 
        console.log("telah bermain game selama - " + (1 + i)); 
    }

} while (kon); 
