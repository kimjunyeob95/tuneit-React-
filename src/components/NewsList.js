import React, {useState,useEffect} from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';



const NewsList = (props) => {
    const [apiUrl] = useState(props.apiUrl);
    const [loading, setLoading] = useState(false);
    const [language,setLanguage] = useState(props.language);
    const [articles, setArticles] = useState(null);
    var totalCount;
    var newsArray = [];
    var total_articles = [];
    useEffect(() => {
      // async를 사용하는 함수 따로 선언
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            apiUrl+'/api/v1/tuneit/news?lang='+language+'&page=',
          );
          totalCount=response.data.data.totalCount;
          
          for(var i=1; i<(totalCount/3)+1;i++){
            const response = await axios.get(
              apiUrl+'/api/v1/tuneit/news?lang='+language+'&page='+i,
            );
            newsArray.push(response.data.data.list);
            // newsArray[i-1] = response.data.data.list
          }
          newsArray = newsArray.map(article=>{
            article.map(sub_article => {
              total_articles.push(sub_article);
            })
          })
          total_articles.sort(function(a,b){
              return b['id']-a['id'];
          });
          setArticles(total_articles);
          
          
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
        
      };
      fetchData();
    }, []);
    
    // 대기 중일 때
    if (loading) {
      return <></>;
    }
    // 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
      return null;
    }
    // articles 값이 유효할 때
    return (
      <>
        {articles.map(article => (
            <NewsItem key={article.id} article={article} />
        ))}
      </>
    );
  };



export default NewsList;