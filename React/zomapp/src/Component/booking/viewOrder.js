import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';
import Header from '../../Header';

const url = "http://localhost:2500"

class ViewOrder extends Component{

    constructor(){
        super()

        this.state = {
            orders:''
        }
    }

    render(){
        return(
            <>
            <Header/>
                <OrderDisplay orderData={this.state.orders}/>
            </>
        )
    }

    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
            if(query){
                let data = {
                    "status":query[0].split('=')[1],
                    "date":query[2].split('=')[1],
                    "bank_name":query[3].split('=')[1]
                }
                let id = query[1].split('=')[1].split('_')[1];
                fetch(`${url}/updateOrder/${id}`,
                {
                    method:'PUT',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:[]
        axios.get(`${url}/orders?email=${email}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;