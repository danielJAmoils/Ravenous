import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

type BusinessListProps = {
    businesses: {
        id: string
        imageSrc: string;
        name: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        category: string;
        rating: number;
        reviewCount: number;
    }[]
}

class BusinessList extends React.Component<BusinessListProps, {}>{
    render(){
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map(function(business){
                    return <Business key={business.id} business={business}/>
                })
                }
            </div>
        )
    }
}

export default BusinessList