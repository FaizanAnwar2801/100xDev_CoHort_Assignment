/* eslint-disable react/prop-types */

const Assignment3 = ()=>{
    const anchorElement = {
        type: 'a',
        props: {
        href: 'https://github.com/FaizanAnwar2801',
        target: '_blank',
        children: ['Click me'],
        },
    }

    function generateHTML(element) {
        const { type, props } = element
        const children = props.children || []
        const attributes = Object.keys(props)
            .filter((key) => key !== 'children')
            .map((key) => `${key}="${props[key]}"`)
            .join(' ')
    
        const childHTML = children.map((child) => {
            return typeof child === 'object' ? generateHTML(child) : child
            }).join('')
            return (`<${type} ${attributes}>${childHTML}</${type}>`)
    }
    
    function customRender(element, container) {
        const html = generateHTML(element)
        const selector = document.querySelector(container)
        selector.innerHTML = html
    }

    return(
        <div>
            {customRender(anchorElement, '#root')}
        </div>
    )
}



export default Assignment3