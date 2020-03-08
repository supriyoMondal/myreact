export const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag == 'function') {
            return tag(props);
        }
        let element = {
            tag, props: { props, children }
        }
        // console.log(element);
        return element;
    }
}

export const render = (reactElementOrString, container) => {
    if (['string', 'number'].includes(typeof reactElementOrString)) {
        container.appendChild(document.createTextNode(String(reactElementOrString)));
        return;
    }
    const actualDomElement = document.createElement(reactElementOrString.tag);


    if (reactElementOrString.props.props) {
        // console.log(reactElementOrString.props.props);
        Object.keys(reactElementOrString.props.props).forEach(p => {
            actualDomElement[p] = reactElementOrString.props.props[p];
        })
    }
    if (reactElementOrString.props.children) {
        reactElementOrString.props.children.forEach(child => render(child, actualDomElement));
    }
    container.appendChild(actualDomElement);
}

