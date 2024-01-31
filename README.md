# UF2: Objectes 2: Pilotes saltarines
## Introducció
Aquesta activitat continua amb el tema dels objectes, en aquest cas aplicats a un clàssic de l’animació 2D que és pintar unes pilotes saltarines.

## Enunciat
Donat el codi base aquest, teniu que desenvolupar les classes i els mètodes necessaris per tal d’obtenir una animació on hi hagi 20 pilotes de colors aleatoris rebotant per la pantalla contra els extrems del canvas de l’animació.

Crea la classe Pilota en el mòdul pilota.js
```
class Pilota{
    constructor(x, y, velX, velY, color, mida) {
        ...
    }
}
```

Importa el mòdul on correspongui
Converteix l’import del script del index.html en un mòdul
A la classe Pilota crea-li el mètode dibuixa:
```
dibuixa(ctx) {
    ctx.beginPath(); // Per començar a dibuixar formes al canvas
    ctx.fillStyle = this.color; //Color amb que dibuixarem
    ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d’un arc
    ctx.fill(); // Finalitza el dibuix i l’omple amb el color ja esmenat
}
```

Amb aquest mètode cada Pilota pot dibuixar-se a sí mateixa en el context definit anteriorment en el canvas.
Ara podem provar la Pilota amb:
```
let Pilota1 = new Pilota(50, 100, 4, 4, "blue", 10);
Pilota1.dibuixa(ctx);
```

Crea en Pilota el mètode mou() on facis que:
- si la posició x mes la mida de la Pilota es major que l’ample del canvas ha de rebotar
- si la posició x menys la mida de la Pilota es menor que 0 → ha de rebotar
- si la posició y mes la mida de la Pilota és major que l’alçada del canvas ha de rebotar
- si la posició y menys la mida de la Pilota és menor que 0 ha de rebotar

A la posició x se li suma la velocitatx

A la posició y se li suma la velocitaty

Crea un array de Pilota

Fes una funció loop() on:
- Pintis tot el rectangle de la pantalla de negre
- creis 25 pilotes aleatòries
    - de mides en1tre 10 i 20
    - a una posició aleatòria x entre (0 + mida) i (with – mida)
    - a una posició aleatòria y entre (0 + mida) i (height – mida)
- afegeix les Pilotes al array
- recorre l’array i per cada pilota fes
    - pilota.dibuixa(ctx)
    - pilota.mou()
- Cridis a requestAnimationFrame(loop);

Per últim afegeix la detecció de col·lisions entre pilotes.