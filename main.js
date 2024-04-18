export function fuggvenyem(n){
    let osszeg =0;
    while(n>0){
        let utolsoszamjegy = n % 10;
        z = osszeg +=utolsoszamjegy 
        n=Math.floor(n/10);

    }
    return osszeg;


}