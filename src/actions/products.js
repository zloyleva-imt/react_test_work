import axios from "axios";
import routes from '../initData/routes'

export const fetchProducts = () => dispatch => {
    axios
        .get(routes.productsUrl, {})
        .then(res => {
            console.log('res', res.data)
            this.setState({
                ...this.state,
                products: res.data
            });
        })
}