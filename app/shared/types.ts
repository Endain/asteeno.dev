export type Subset<T extends U, U> = U;

interface Foo {
    name: string;
    age: number;
}

type Bar = Subset<Foo, {
    name: string;
}>;