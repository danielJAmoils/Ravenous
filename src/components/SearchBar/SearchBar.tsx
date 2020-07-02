import React, { ChangeEvent } from 'react'
import './SearchBar.css'

type SearchBarState = {
    term: string
    location: string
    sortBy: string
}

class SearchBar extends React.Component<{}, SearchBarState> {
    sortByOptions: {  [index: string]: string //allows object to be indexed with strings
        'Best Match': string; 'Highest Rated': string; 'Most Reviewed': string;
    }
    constructor(props: Readonly<{}>){
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)

        this.sortByOptions =  {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    getSortByClass(sortByOption: string){
        if(sortByOption === this.state.sortBy){
            return 'active'
        }else{
            return ''
        }
    }

    handleSortByChange(sortByOption: string){
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event:any){//try to find better type look below it is on change
        this.setState({
            term:event.target.value
        })
    }

    handleLocationChange(event:any){//is a change event i don't know why not working
        this.setState({
            location:event.target.value
        })
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            const sortByOptionValue = this.sortByOptions[sortByOption]
            return <li 
            key={sortByOptionValue} 
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        })
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar