const youtube = (inputURL: string): string => {
    const regex : RegExp = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;
    const matches = regex.exec(inputURL)
    
    if(!matches){
        return inputURL
    }

    return `https://www.youtube${(matches[2] || '')}.com/embed/${matches[4]}?autoplay=1`
}

export default youtube;