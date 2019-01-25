class Model {
    constructor(attributes) {
        this.fillAttributes(attributes)
    }

    getAttributes() {
        return {}
    }

    fill(attributes) {
        attributes = attributes || {}
        this.fillAttributes(attributes)
        return this
    }

    fillAttributes(attributes) {
        attributes = attributes || {}
        for (let name of Object.keys(this.getAttributes())) {
            if (!attributes.hasOwnProperty(name)) {
                this.setAttribute(name, null)
            }
        }
        for (let [name, value] of Object.entries(attributes)) {
            this.setAttribute(name, value)
        }
        return this
    }

    setAttribute(name, value) {
        if (this.getAttributes().hasOwnProperty(name)) {
            let attribute = this.getAttributes()[name]
            if (value !== null && value !== undefined) {
                // if (value.constructor !== attribute.type) {
                //     throw new Error('Type mismatch exception for attribute ' + name + ', expected ' + attribute.type + ', got ' + value.constructor)
                // }
                if (attribute.isModel) {
                    value = new attribute.type(value)
                } else if (attribute.isArray) {
                    let tmpList = []
                    for (let item in value) {
                        tmpList.push(new attribute.type(value[item]))
                    }
                    value = tmpList
                }
            } else {
                value = attribute.default
            }
        }
        this[name] = value
    }
}

export default Model
