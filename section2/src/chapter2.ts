// 배열
let numArr: number[] = [1, 2, 3]; // 타입이 배열임을 알릳기위해 []를 사용
let strArr: string[] = ["hello", "world"]; // 타입추론을 통해 string[]으로 추론
let booArr: Array<boolean> = [true, false]; // 제네릭을 통해 타입을 명시

// 배열에 들어가는 요소들의 타입이 다양한 경우
let  multuArr: (number | string)[] =  [1,  "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플 타입(길이와  타입이 고정된 배열) 순서대로 타입을 정의
let tuple: [string, number, boolean] = ["hello", 123, true];

const users:[string, number][] = [
    ["이정환", 1],
    ["김철수", 2],
    ["홍길동", 3],
    ["이미자", 4],
    [5,"사미자"]
]
