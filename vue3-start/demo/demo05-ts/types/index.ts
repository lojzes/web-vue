// 分别导出
// 定义接口类型 Person
export interface PersonI {
    id:string;
    name: string;
    age: number;
}

// 自定义类型

// export type Persons = Array<Person>;
// 或者
export type Persons = PersonI[];




