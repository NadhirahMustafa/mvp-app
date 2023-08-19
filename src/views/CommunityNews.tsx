import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getNews } from "../services/Api.services";
import { newsProps } from "../interface/product.interface";
import { common, communityNews } from "../constants/message";
import "../styles/Dashboard.scss";

const CommunityNews: React.FC = () => {
  const [news, setNews] = useState<newsProps>({
    limit: 0,
    posts: [],
    skip: 0,
    total: 0,
  });

  const fetchList = async () => {
    let res = await getNews();
    if (res) {
      setNews(res);
    } else {
      alert(common.alertMessage);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Grid className="common--padding communityNews--section">
      <Grid className="communityNews--title">{communityNews.pageTitle}</Grid>
      <Grid className="common--card-arr">
        {news.posts.map((row: any, index: any) => (
          <Grid key={index} className="common--card-list">
            <Grid>
              <Grid className="communityNews--padding-bottom">
                <Grid>
                  <b>{row.title}</b>
                </Grid>
                <Grid>{row.body}</Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CommunityNews;
