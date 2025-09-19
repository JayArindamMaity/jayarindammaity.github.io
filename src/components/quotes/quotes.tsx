import './quotes.css'
import { quotes } from '../../data/quotes'

export default function Quotes () {

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className='quote-main'>
            {randomQuote.quote}
        </div>
    )
}