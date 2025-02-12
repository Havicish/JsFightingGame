class Vector {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }

    Add(V) {
        return new Vector(this.X + V.X, this.Y + V.Y);
    }

    Sub(V) {
        return new Vector(this.X - V.X, this.Y - V.Y);
    }

    Mul(V) {
        return new Vector(this.X * V.X, this.Y * V.Y);
    }

    Div(V) {
        return new Vector(this.X / V.X, this.Y / V.Y);
    }

    AddN(N) {
        return new Vector(this.X + N, this.Y + N);
    }

    SubN(N) {
        return new Vector(this.X - N, this.Y - N);
    }

    MulN(N) {
        return new Vector(this.X * N, this.Y * N);
    }

    DivN(N) {
        return new Vector(this.X / N, this.Y / N);
    }

    get Length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y);
    }

    get Normalized() {
        return this.DivN(this.Length);
    }
}