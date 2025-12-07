
interface StringDictionary {
    [index: string]: string;
}

interface MultiValueDictionary {
    [key: string]: string | number;
}

let myDict: MultiValueDictionary = {
    "color": "blue",
    "hex": 153252
}

type keyMultiDict = string |number | undefined

function getValueFromDict (key: string, dict: MultiValueDictionary): keyMultiDict {
    return dict[key];
}

let returnValue: keyMultiDict = getValueFromDict("color", myDict)

console.log(returnValue)