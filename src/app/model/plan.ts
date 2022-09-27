export class Plan {
    public id: string;
    public nombre: string;
    public tna: number;
    public duracionMinimaCuotas: number;
    public duracionMaximaCuotas: number;
    public montoMinimo:number;
    public montoMaximo:number;
    public edadMaxima:number;
    public precancelacion:boolean;
    public precancelacionCuotaMinima:number;
    public precancelacionMulta:number;
    public vigencia:boolean;
    public costoAdministrativo:number;



    constructor() {
      this.id = "";
      this.nombre='';
      this.tna = 0;
      this.duracionMinimaCuotas = 0;
      this.duracionMaximaCuotas = 0;
      this.montoMinimo = 0;
      this.montoMaximo = 0;
      this.edadMaxima = 0;
      this.precancelacion = false;
      this.precancelacionCuotaMinima = 0;
      this.precancelacionMulta= 0;
      this.vigencia= true;
      this.costoAdministrativo= 0;

    }

    toString() {
      return `${this.id} ${this.nombre}` ;
    }
  }