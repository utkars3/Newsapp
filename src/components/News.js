// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   // articles= [
//   //   {
//   //    "source": {
//   //    "id": "cnn",
//   //    "name": "CNN"
//   //    },
//   //    "author": "Anna Cooban",
//   //    "title": "Diesel prices fall in Europe despite ban on Russian fuel - CNN",
//   //    "description": "Europe's ban on Russia's diesel arrived painlessly on Sunday.",
//   //    "url": "https://www.cnn.com/${props.pageSize}23/02/06/energy/europe-russian-diesel-ban/index.html",
//   //    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230${props.pageSize}6122241-eu-russia-diesel-ban-file-042822.jpg?c=16x9&q=w_800,c_fill",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:30:00Z",
//   //    "content": "Europes ban on Russias diesel arrived painlessly on Sunday. \r\nAlthough the EU cut off its biggest supplier, diesel futures prices in the bloc fell 1.6% on Monday, amounting to a ${props.pageSize}% loss over the pas… [+3749 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "associated-press",
//   //    "name": "Associated Press"
//   //    },
//   //    "author": "Mehmet Guzel, Ghaith Alsayed",
//   //    "title": "Turkey earthquake: Live updates on 7.8 quake - The Associated Press - en Español",
//   //    "description": "ADANA, Turkey (AP) — A powerful 7.8 magnitude earthquake rocked wide swaths of Turkey and neighboring Syria on Monday, killing more than 2,300 people  and injuring thousands more as it toppled hundreds of buildings and trapped residents under mounds of rubble…",
//   //    "url": "https://apnews.com/article/earthquake-shakes-turkey-b927808f6a5c54bdb6691${props.pageSize}faa40b7bc",
//   //    "urlToImage": "https://storage.googleapis.com/afs-prod/media/784561e953274185b4b7563${props.pageSize}099c45e/3000.webp",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:26:56Z",
//   //    "content": "ADANA, Turkey (AP) A powerful 7.8 magnitude earthquake rocked wide swaths of Turkey and neighboring Syria on Monday, killing more than 2,300 people and injuring thousands more as it toppled hundreds … [+7181 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "cnn",
//   //    "name": "CNN"
//   //    },
//   //    "author": "Tierney Sneed",
//   //    "title": "Justice Department charges two people with conspiracy to destroy energy facilities - CNN",
//   //    "description": "The Justice Department has charged two people with conspiracy to damage energy facilities, alleging that the Maryland-focused plot was driven by ethnically or racially motivated extremist beliefs.",
//   //    "url": "https://www.cnn.com/${props.pageSize}23/02/06/politics/justice-department-energy-facilities/index.html",
//   //    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210915142700-01-doj-emblem-file.jpg?q=x_0,y_0,h_1687,w_2997,c_fill/w_800",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:16:00Z",
//   //    "content": "The Justice Department has charged two people with conspiracy to damage energy facilities, alleging that the Maryland-focused plot was driven by ethnically or racially motivated extremist beliefs.\r\nT… [+532 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "Rolling Stone"
//   //    },
//   //    "author": "Jon Blistein",
//   //    "title": "Harry Styles, Lizzo Take Top Grammys as Beyoncé Makes History - Rolling Stone",
//   //    "description": "Bonnie Raitt pulls off a shocker, and LGBTQ artists shine at a heated moment in the culture wars",
//   //    "url": "https://www.rollingstone.com/music/music-news/grammys-${props.pageSize}23-lizzo-harry-styles-beyonce-1234674414/",
//   //    "urlToImage": "https://www.rollingstone.com/wp-content/uploads/${props.pageSize}23/02/lizzo-harry-bey-split-1246833816-copy.jpg?w=1600&h=900&crop=1",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:03:38Z",
//   //    "content": "Harry Styles and Lizzo split the biggest spoils as Beyoncé made history — but went home empty-handed in the major categories yet again — at the 65th Grammy Awards Sunday night.  \r\nStyles won the bigg… [+9217 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "the-washington-post",
//   //    "name": "The Washington Post"
//   //    },
//   //    "author": "Miriam Berger, William Booth, Fatima Abdul Karim",
//   //    "title": "Israeli attack on Jericho kills 5 in widening West Bank unrest - The Washington Post",
//   //    "description": "Israel said two of those killed were implicated in an operation to attack a Jewish restaurant outside Jericho. No one was hurt in that incident.",
//   //    "url": "https://www.washingtonpost.com/world/${props.pageSize}23/02/06/israel-jericho-palestinians-west-bank/",
//   //    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IXDIDA42VUL65M3PDJ7GJAEJUY.jpg&w=1440",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:03:00Z",
//   //    "content": "Comment on this story\r\nJERICHO, West Bank Israeli security forces killed five Palestinians during an early morning raid Monday in the normally quiet city of Jericho, amid the worst violence in the We… [+5540 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "TMZ"
//   //    },
//   //    "author": "TMZ Staff",
//   //    "title": "Quavo and Offset Get into Fight Backstage at Grammys Over Takeoff Tribute - TMZ",
//   //    "description": "There's clearly still serious bad blood between Migos' rappers Quavo and Offset following the death of Takeoff ... and those emotions boiled over backstage at the Grammys into a physical fight.",
//   //    "url": "https://www.tmz.com/${props.pageSize}23/02/06/quavo-offset-fight-backstage-grammys-takeoff-tribute/",
//   //    "urlToImage": "https://imagez.tmz.com/image/27/16by9/${props.pageSize}23/02/06/27308f0bc4c847c4b392ee29cae71fea_xl.png",
//   //    "publishedAt": "${props.pageSize}23-02-06T16:02:00Z",
//   //    "content": "There's clearly still serious bad blood between Migos' rappers Quavo and Offset following the death of Takeoff ... and those emotions boiled over backstage at the Grammys into a physical fight.\r\nSour… [+878 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "CBS Sports"
//   //    },
//   //    "author": "",
//   //    "title": "Kyrie Irving trade: Mavericks have not promised new contract to All-Star guard, per report - CBS Sports",
//   //    "description": "Dallas gave the Nets several assets to land Irving, who could potentially just be a rental",
//   //    "url": "https://www.cbssports.com/nba/news/kyrie-irving-trade-mavericks-have-not-promised-new-contract-to-all-star-guard-per-report/",
//   //    "urlToImage": "https://sportshub.cbsistatic.com/i/r/${props.pageSize}23/02/06/9a511db5-7477-40a9-b121-4823695dd0f5/thumbnail/1${props.pageSize}0x675/2fbaf0f8dd93b4bbc6b${props.pageSize}d99643f133a/gettyimages-14556${props.pageSize}567-1.jpg",
//   //    "publishedAt": "${props.pageSize}23-02-06T15:31:00Z",
//   //    "content": "The Dallas Mavericks made a major splash in trading for Kyrie Irving Sunday afternoon. Dallas sent Dorian Finney-Smith, Spencer Dinwiddie, a ${props.pageSize}29 first-round pick and two future second-round picks to… [+${props.pageSize}07 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "Sports Illustrated"
//   //    },
//   //    "author": "Albert Breer",
//   //    "title": "How the Chiefs Planned Very Early in Patrick Mahomes’s Career to Build Around Him - Sports Illustrated",
//   //    "description": "From the unique structure of their QB’s contract to the reasons they traded Tyreek Hill to the Dolphins instead of the Jets, this is how Kansas City prepared years in advance to build this team.",
//   //    "url": "https://www.si.com/nfl/${props.pageSize}23/02/06/chiefs-built-team-around-patrick-mahomes-very-early",
//   //    "urlToImage": "https://www.si.com/.image/t_share/MTk1NjkyMDgyMzg2NDQ2MjE5/mahomes-afc-champions-shirt.jpg",
//   //    "publishedAt": "${props.pageSize}23-02-06T15:05:40Z",
//   //    "content": "It was July ${props.pageSize}17, and, after the surprise summer firing of John Dorsey, new Chiefs GM Brett Veach was holding one of his first meetings, scrambling to adjust to the job after a wild month. This one w… [+19492 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "The Guardian"
//   //    },
//   //    "author": "Peter Beaumont",
//   //    "title": "Russia assembles troops for possible offensive in Luhansk, Ukraine says - The Guardian",
//   //    "description": "‘Battles for the region are heating up’ as Russian forces are located in Donetsk",
//   //    "url": "https://www.theguardian.com/world/${props.pageSize}23/feb/06/russia-assembles-troops-possible-offensive-luhansk-ukraine-says",
//   //    "urlToImage": "https://i.guim.co.uk/img/media/f9a96a9f18007bfd182eeac8a1e5b9511678bbf6/0_225_3780_2267/master/3780.jpg?width=1${props.pageSize}0&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=412d35f64ad4f3f5d81b4535d246bbc5",
//   //    "publishedAt": "${props.pageSize}23-02-06T14:38:00Z",
//   //    "content": "Russian forces are attempting to tie down Ukrainian forces with fighting in the eastern Donbas region as Moscow assembles additional troops there for an expected offensive in the coming weeks, perhap… [+5645 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "the-wall-street-journal",
//   //    "name": "The Wall Street Journal"
//   //    },
//   //    "author": "Eric Wallerstein, Amrith Ramkumar, Joe Wallace, Anna Hirtenstein",
//   //    "title": "Stock Market Today: Dow Futures Fall, Dollar Gains With Interest Rates in Focus - The Wall Street Journal",
//   //    "description": "Follow The Wall Street Journal's full markets coverage.",
//   //    "url": "https://www.wsj.com/livecoverage/stock-market-news-today-02-06-${props.pageSize}23",
//   //    "urlToImage": "https://images.wsj.net/im-589547/social",
//   //    "publishedAt": "${props.pageSize}23-02-06T14:36:00Z",
//   //    "content": null
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "CNBC"
//   //    },
//   //    "author": "John Rosevear",
//   //    "title": "Canoo's shares sink after EV maker agrees to sell $52 million in discounted stock - CNBC",
//   //    "description": "Canoo said in November that it was running low on cash and that it expected to raise funds by issuing new shares.",
//   //    "url": "https://www.cnbc.com/${props.pageSize}23/02/06/canoo-goev-shares-stock-offering.html",
//   //    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106992444-1640121025413CANOO-04.jpg?v=1675693899&w=19${props.pageSize}&h=1080",
//   //    "publishedAt": "${props.pageSize}23-02-06T14:31:39Z",
//   //    "content": "Shares of electric vehicle startup Canoo were sharply lower in early trading on Monday after the company said that it has agreed to sell discounted shares to raise $52.5 million.\r\nThe stock opened Mo… [+1159 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "The Athletic"
//   //    },
//   //    "author": "Amitai Winehouse",
//   //    "title": "Manchester City allegedly breach Premier League financial rules over nine-season period - The Athletic",
//   //    "description": "The Premier League has accused Manchester City of breaking its financial rules following a four-year investigation.\nThe reigning champions have been referred to an independent commission over alleged breaches of a series of financial rules between the ${props.pageSize}09-10…",
//   //    "url": "https://theathletic.com/4159396/${props.pageSize}23/02/06/manchester-city-premier-league-finances/",
//   //    "urlToImage": "https://cdn.theathletic.com/app/uploads/${props.pageSize}23/02/06051856/etihad-general-1024x683.jpeg",
//   //    "publishedAt": "${props.pageSize}23-02-06T13:47:26Z",
//   //    "content": "The Premier League has accused Manchester City of breaking its financial rules following a four-year investigation.\r\nThe reigning champions have been referred to an independent commission over allege… [+2428 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "fox-news",
//   //    "name": "Fox News"
//   //    },
//   //    "author": "Stephen Sorace",
//   //    "title": "Missing Missouri children found in Florida grocery store nearly a year after abduction, police say - Fox News",
//   //    "description": "Police in High Springs, Florida, located two children who were allegedly abducted by their noncustodial mother last year in Missouri after a \"routine\" vehicle tag check.",
//   //    "url": "https://www.foxnews.com/us/missing-missouri-children-found-florida-grocery-store-nearly-year-abduction-police-say",
//   //    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/${props.pageSize}23/02/gilley-family.jpg",
//   //    "publishedAt": "${props.pageSize}23-02-06T13:26:00Z",
//   //    "content": "Two Missouri children missing for nearly a year were found last week shopping at a Florida grocery store with their alleged abductor nearly a year after they were taken, authorities said.\r\nPolice in … [+1524 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "cnn",
//   //    "name": "CNN"
//   //    },
//   //    "author": "Alli Rosenbloom",
//   //    "title": "Harry Styles wins album of the year and other big moments from the Grammys - CNN",
//   //    "description": "There's probably a party over at Harry's house on Sunday night because Harry Styles took home the trophy for album of the year at the Grammy Awards. Here's a look at the top moments from the show.",
//   //    "url": "https://www.cnn.com/${props.pageSize}23/02/05/entertainment/the-grammy-awards-${props.pageSize}23/index.html",
//   //    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230${props.pageSize}6001043-harry-styles-grammy-awards-${props.pageSize}23-album-of-the-year.jpg?c=16x9&q=w_800,c_fill",
//   //    "publishedAt": "${props.pageSize}23-02-06T13:01:00Z",
//   //    "content": "Theres probably a party over at Harrys house on Sunday night because Harry Styles took home the trophy for album of the year at the Grammy Awards for his ${props.pageSize}22 hit album Harrys House.\r\nIve been so, so… [+7031 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "Space.com"
//   //    },
//   //    "author": "Mike Wall",
//   //    "title": "Watch SpaceX launch big communications satellite on today after weather delay - Space.com",
//   //    "description": "Liftoff is scheduled for 5:32 p.m. ET.",
//   //    "url": "https://www.space.com/spacex-launch-hispasat-communications-satellite",
//   //    "urlToImage": "https://cdn.mos.cms.futurecdn.net/Yyqi7Z5skc5UnbUXBGrwac-1${props.pageSize}0-80.jpg",
//   //    "publishedAt": "${props.pageSize}23-02-06T12:32:40Z",
//   //    "content": "SpaceX plans to launch a commercial communications satellite to orbit on Monday (Feb. 6), and you can watch the action live.\r\nA Falcon 9 rocket carrying the Amazonas Nexus satellite for the Spanish c… [+3087 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "the-washington-post",
//   //    "name": "The Washington Post"
//   //    },
//   //    "author": "Toluse Olorunnipa, Scott Clement, Emily Guskin",
//   //    "title": "Americans not feeling impact of Biden agenda, Post-ABC poll finds - The Washington Post",
//   //    "description": "Most Americans think the president has accomplished little or nothing so far, a challenge for the White House ahead of the State of the Union address.",
//   //    "url": "https://www.washingtonpost.com/politics/${props.pageSize}23/02/06/poll-americans-dont-feel-biden-impact/",
//   //    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DQMIB7FERUI63C2HTBR73KHESQ.jpg&w=1440",
//   //    "publishedAt": "${props.pageSize}23-02-06T12:31:10Z",
//   //    "content": "Comment on this story\r\nTwo years into a presidency that the White House casts as the most effective in modern history, President Biden is set to deliver a State of the Union address Tuesday to a skep… [+9772 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "engadget",
//   //    "name": "Engadget"
//   //    },
//   //    "author": "https://www.engadget.com/about/editors/steve-dent",
//   //    "title": "Nintendo classic 'Zelda: A Link to the Past' gets an unofficial PC port - Engadget",
//   //    "description": "The latest game to get the reverse-engineering treatment is 'The Legend of Zelda: A Link to the Past.'.",
//   //    "url": "https://www.engadget.com/someone-reverse-engineered-the-legend-of-zelda-a-link-to-the-past-for-pc-115542772.html",
//   //    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/${props.pageSize}23-02/c33adfe0-a60b-11ed-a7ea-f0bc3bd534f7",
//   //    "publishedAt": "${props.pageSize}23-02-06T11:56:44Z",
//   //    "content": "The latest game to get the reverse-engineering treatment is The Legend of Zelda: A Link to the Past, Neowin has reported. A GitHub user called snesrev has fully ported the game to PC using over 80,00… [+1244 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "the-washington-post",
//   //    "name": "The Washington Post"
//   //    },
//   //    "author": "John Wagner, Mariana Alfaro",
//   //    "title": "Post Politics Now: Biden to deliver State of the Union speech this week, then hit the road - The Washington Post",
//   //    "description": "After a speech to a joint session of Congress on Tuesday, Biden is set to travel to Wisconsin on Wednesday and Florida on Thursday.",
//   //    "url": "https://www.washingtonpost.com/politics/${props.pageSize}23/02/06/biden-state-union-travel-spy-balloon/",
//   //    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DZGKRUUE2TLF5JT7ZEWP3JJIPU.JPG&w=1440",
//   //    "publishedAt": "${props.pageSize}23-02-06T11:42:35Z",
//   //    "content": "Every president announces initiatives in a State of the Union address, and we can expect many to be advanced Tuesday when President Biden goes before Congress for the ${props.pageSize}23 edition.\r\nWriting in The Fa… [+399 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": null,
//   //    "name": "Slate Magazine"
//   //    },
//   //    "author": "Richard L. Hasen",
//   //    "title": "Moore v. Harper: Unfortunately, the big Supreme Court election case could be moot. - Slate",
//   //    "description": "Postponing the inevitable will not necessarily lead to better results down the line.",
//   //    "url": "https://slate.com/news-and-politics/${props.pageSize}23/02/moore-v-harper-supreme-court-election-case-moot.html",
//   //    "urlToImage": "https://compote.slate.com/images/173e3c8f-fb80-4755-9594-4f1770739b14.jpeg?crop=6484%2C4323%2Cx0%2Cy0&width=1560",
//   //    "publishedAt": "${props.pageSize}23-02-06T10:50:00Z",
//   //    "content": "Will a power grab by the new Republican majority on North Carolinas Supreme Courtostensibly to reverse a power grab by the earlier Democratic majority on North Carolinas Supreme Courtdeprive conserva… [+8443 chars]"
//   //    },
//   //   {
//   //    "source": {
//   //    "id": "axios",
//   //    "name": "Axios"
//   //    },
//   //    "author": "Ivana Saric",
//   //    "title": "George Santos accused of sexual harassment by prospective staffer - Axios",
//   //    "description": "The former aide, Derek Myers, outlined the allegations in a letter to the House Committee on Ethics.",
//   //    "url": "https://www.axios.com/${props.pageSize}23/02/05/george-santos-sexual-harassment-accusation-derek-myers",
//   //    "urlToImage": "https://images.axios.com/jUKpr603J07td-O2ciKDSrRs55E=/0x36:5171x2945/1366x768/${props.pageSize}23/02/05/1675606998337.jpg",
//   //    "publishedAt": "${props.pageSize}23-02-06T10:41:15Z",
//   //    "content": "Rep. George Santos (R-N.Y.) has been accused of sexual harassment and ethics violations by a prospective staffer who briefly worked in Santos' office.\r\nDriving the news: In a letter to the House Comm… [+2864 chars]"
//   //    }
//   //    ]

//   static defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general'
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

//   Capitalize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       // articles: this.articles,
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0


//     }
//     document.title = `${this.Capitalize(props.category)} - NewsMonkey`;
//   }

//   async updateNews() {
//     props.setProgress(0);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true, but: false });
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();

//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, but: true })
//     props.setProgress(100);

//   }

//   //ye render ke baad run hoga
//   async componentDidMount() {
//     this.updateNews();
//   }

//   // handleNextClick=async ()=>{
//   //   this.setState({
//   //     page:this.state.page+1
//   //   })
//   //   this.updateNews();
//   // }

//   // handlePrevClick=async ()=>{
//   //   this.setState({
//   //     page:this.state.page-1
//   //   })
//   //   this.updateNews();
//   // }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true,but:false});
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       // loading:false,but:true
//     })
//   };

//   render() {
//     console.log("render");
//     return (
//       <div className="container my-3">
//         <h1 className="text-center">NewsMonkey - Top  {this.Capitalize(props.category)} Headlines</h1>
//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner />}
//         >

//           <div className="row">

//             {/* {!this.state.loading && this.state.articles.map((element)=>{

//             return <div className="col-md-4" key={element.url}>
//             <NewsItem  title={element.title?element.title.slice(0,45 ):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://static.toiimg.com/photo/97694086.cms"} newsUrl={element.url} date={element.publishedAt} author={element.author?element.author:"unknown"} source={element.source.name} />  
//             </div>
//           }) }     */}

//             {this.state.articles.map((element) => {

//               return <div className="col-md-4" key={element.url}>
//                 <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/photo/97694086.cms"} newsUrl={element.url} date={element.publishedAt} author={element.author ? element.author : "unknown"} source={element.source.name} />
//               </div>
//             })}

//           </div>
//         </InfiniteScroll>

//         {/* <div 
//         className="container d-flex justify-content-between">
//           {this.state.but && <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>}
//           {this.state.but && <button type="button" disabled={Math.ceil(this.state.totalResults/props.pageSize)===this.state.page} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>}
//           </div> */}

//       </div>
//     )
//   }
// }

// export default News






import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();

    console.log(parsedData);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);

  }


  //component did mount ka kaam use effect karega
  useEffect(() => {
  document.title = `${Capitalize(props.category)} - NewsMonkey`;

    updateNews();


  }, [])



  const handleNextClick=async ()=>{
    setPage(page+1);
    updateNews();
  }

  const handlePrevClick=async ()=>{
    setPage(page-1);
    updateNews();
  }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1); 
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };


  return (
    <div className="container my-3">
      <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsMonkey - Top  {Capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="row">



          { articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/photo/97694086.cms"} newsUrl={element.url} date={element.publishedAt} author={element.author ? element.author : "unknown"} source={element.source.name} />
            </div>
          })}

        </div>
      </InfiniteScroll>

      {/* <div 
        className="container d-flex justify-content-between">
          {but && <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}>&larr; Prev</button>}
          {but && <button type="button" disabled={Math.ceil(totalResults/props.pageSize)===state.page} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>}
          </div> */}

    </div>
  )




}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News





