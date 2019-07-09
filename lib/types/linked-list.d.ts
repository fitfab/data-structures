declare class Branch {
    data: any;
    next: any;
    constructor(value: any, head?: any);
}
declare class LinkedList {
    head: any;
    size: number;
    constructor();
    isEmpty(): boolean;
    length(): number;
    prepend(val: any): void;
    append(val: any): void;
    remove(val: any): void;
    contains(val: any): boolean;
}
declare let list: LinkedList;
