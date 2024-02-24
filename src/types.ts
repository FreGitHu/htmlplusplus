export interface Title {
    _text: string
}

export interface PTag {
    _text: string
}

export interface HTMLPlusPlus {
    title?: Title
    p?: PTag
}

export interface Root {
    htmlplusplus?: HTMLPlusPlus
}