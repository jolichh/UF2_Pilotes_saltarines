export class Pilota {
    constructor(x, y, velX, velY, color, mida) {
        this.x = x; //posicion horizontal
        this.y = y; //posicion vertical
        this.velX = velX;   //velocidad
        this.velY = velY;   //velocidad
        this.color = color;
        this.mida = mida;   //tamaño de la pelota
    }
    dibuixa(ctx) {
        ctx.beginPath(); // Per començar a dibuixar formes al canvas
        ctx.fillStyle = this.color; //Color amb que dibuixarem
        ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d’un arc
        ctx.fill(); // Finalitza el dibuix i l’omple amb el color ja esmenat
    }
    mou(ancho, alto) {
        //si la posició x mes la mida de la Pilota es major que l’ample del canvas ha de rebotar (borde derecho)
        if ((this.x + this.mida) >= ancho) {
            this.velX = -this.velX;
        }

        //si la posició x menys la mida de la Pilota es menor que 0 → ha de rebotar (borde izquierdo)
        if ((this.x - this.mida) <= 0) {
            this.velX = -this.velX;
        }

        //si la posició y mes la mida de la Pilota és major que l’alçada del canvas ha de rebotar (borde inferior)
        if (this.y + this.mida >= alto) {
            this.velY = -this.velY;
        }

        //si la posició y menys la mida de la Pilota és menor que 0 ha de rebotar (borde superior)
        if (this.y - this.mida <= 0) {
            this.velY = -this.velY;
        }

        //a la posició x se li suma la velocitatx (efecto movimiento)
        this.x += this.velX;
        //a la posició y se li suma la velocitaty (efecto movimiento)
        this.y += this.velY;
        
    }
}