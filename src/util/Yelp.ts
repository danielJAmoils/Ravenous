
type YelpResponse = {
    "id": string,
    "alias": string,
    "name": string,
    "image_url": string,
    "is_claimed": boolean,
    "is_closed": boolean,
    "url": string,
    "phone": string,
    "display_phone": string,
    "review_count": number,
    "categories": {
        alias: string;
        title: string;
    }[],
    "rating": number,
    "location": {
        address1: string;
        address2: string;
        address3: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
        display_address: string[];
        cross_streets: string;
    },
    "coordinates": {
      "latitude": number,
      "longitude": number
    },
    "photos": string[],
    "price": string,
    "hours": {
        open: {
            is_overnight: boolean;
            start: string;
            end: string;
            day: number;
        }[];
        hours_type: string;
        is_open_now: boolean;
    }[],
    "transactions": [],
    "special_hours": [
      {
        "date": string,
        "is_closed": null,
        "start": string,
        "end": string,
        "is_overnight": boolean
      }
    ]
  }



const apiKey = 'mWV-3PL7bD7g4im6cdpi6NZpede_TEF3k5rRbNZZPG1NQqaGfWE6kyi2NxXvRPffK2s0Qmv184CPcdjOjsFD1G4zCneKtDSyaCt-6IdTShL5S1UCxrYrFqw3R4n_XnYx'

const Yelp = {
    search(term:string, location:string, sortBy:string){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers:{
                    Authorization: `Bearer ${apiKey}`
                }
            })
            .then(response => {
                return response.json()
            })
            .then((jsonResponse: {businesses: YelpResponse[]}) => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map((business:YelpResponse) => {
                        return {
                            id:business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount:business.review_count
                        }
                    })
                }
            })
    },
}

export default Yelp