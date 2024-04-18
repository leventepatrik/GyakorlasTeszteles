import { fuggvenyem} from "./main.js";

export function tesztesetek() {
    const tesztEsetek=[
    {
        n:312,
        vart:6,
    },
    {
        n:3122,
        vart:8
    },
    {
        n:0
        vart:0
    }
    ];
tesztEsetek.forEach(function() {
    console.assert(
        teszt.vart === szamjegyekOsszege(teszt.n),
        `n:${teszt.n}vart:${teszt.vart}kapott:${szamjegyekOsszege}()
    )}HIBA!`
    );
    });
}
