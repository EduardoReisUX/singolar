interface TextProps {
    text: string
}

export function Text({ text }: TextProps): JSX.Element {
    return (
        <div>{text}</div>
    )
}
