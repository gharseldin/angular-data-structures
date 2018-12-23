export class Model {

    private nodes: any[] = [];
    private links: any[] = [];

    constructor(n:any[], l:any[]) { 
        this.nodes = n;
        this.links = l;
    }

    // Accessor methods
    public getNodes(): any[]{
        return this.nodes;
    }
    public getLinks(): any[]{
        return this.links;
    }

    public addNode(node:any):void{
        this.nodes.push(node);
    }
    public addLink(link:any):void{
        this.links.push(link);
    }
}