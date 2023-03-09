export class destinoViaje {
    private selected: boolean;
    constructor( public name:string, public url: string) {}

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
}