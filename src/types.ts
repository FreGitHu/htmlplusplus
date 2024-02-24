export interface Title {
    _text: string
}

export interface PTag {
    _text: string
}

export interface Body {
    p: PTag
}

export interface HTMLPlusPlus {
    title?: Title
    body?: Body
}

export interface Root {
    htmlplusplus?: HTMLPlusPlus
}