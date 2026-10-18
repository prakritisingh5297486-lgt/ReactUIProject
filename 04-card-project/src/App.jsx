import Card from './components/card'

const App = () => {
  const jobs = [
    {
      brandlogo: "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
      company: "Google",
      posted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Delhi, India"
    },
    {
      brandlogo: "https://t4.ftcdn.net/jpg/02/94/54/07/240_F_294540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
      company: "Amazon",
      posted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Lucknow, India"
    },
    {
      brandlogo: "https://t3.ftcdn.net/jpg/04/86/92/72/240_F_486927227_mA9ndI0sSlqaBbXFT7cI1FDkpE6AVKrj.jpg",
      company: "Meta",
      posted: "10 days ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://t3.ftcdn.net/jpg/18/51/79/20/240_F_1851792061_ruyhHeWloAxnInlAv3mpnVaVvttbvGvR.jpg",
      company: "Netflix",
      posted: "3 weeks ago",
      post: "Product Designer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Gorakhpur, India"
    },
    {
      brandlogo: "https://t4.ftcdn.net/jpg/03/99/86/35/240_F_399863598_AIYOozLsmXZLEeZk6h5LuY5p3ZUCad2b.jpg",
      company: "Apple",
      posted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Patna, India"
    },
    {
      brandlogo: "https://as1.ftcdn.net/v2/jpg/02/97/73/28/1000_F_297732896_pbAY87SnXyhhhgIOavV2PolvM7LUJ5ey.jpg",
      company: "Microsoft",
      posted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Delhi, India"
    },
    {
      brandlogo: "https://t4.ftcdn.net/jpg/03/00/41/17/240_F_300411718_AVxaaAFORUmyWSfGjET5oSE4cjtgz2Az.jpg",
      company: "Adobe",
      posted: "2 days ago",
      post: "UI Engineer",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Menlo Park, USA"
    },
    {
      brandlogo: "https://t4.ftcdn.net/jpg/05/40/24/49/240_F_540244989_n4CQXMSlQ485KJHjwa3j5YZdAASnaahq.jpg",
      company: "Tesla",
      posted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://t4.ftcdn.net/jpg/18/51/79/19/240_F_1851791992_iaY4Tk99L6jakV4RR5MXMaammtIThgBt.jpg",
      company: "Uber",
      posted: "8 days ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://t3.ftcdn.net/jpg/18/54/52/94/240_F_1854529419_1O59VSMBHfI55mRdbsErv9bs3WqBhkRb.jpg",
      company: "Airbnb",
      posted: "12 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Mumbai, India"
    }
  ];
  // console.log(jobs);
  // arr.forEach(function (elem) {
  //   console.log(elem.user);
  //   console.log(elem.age);
  // })
  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        // return <h1>{elem.pay}</h1>
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} posted={elem.posted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandlogo}/>
        </div>
      })}
    </div>
  )
}

export default App
