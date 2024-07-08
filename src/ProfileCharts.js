import React from 'react';
import Chart from 'react-apexcharts';

const ProfileCharts = () => {
  const chartOptions = {
    chart: {
      id: 'chart',
      toolbar: {
        show: true
      }
    },
    colors: ['#770248'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 4
    }
  };

  const postsSeries = [{
    name: 'Posts',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 110, 95, 85]
  }];

  const likesSeries = [{
    name: 'Likes',
    data: [300, 400, 350, 500, 490, 600, 700, 910, 1250, 1100, 950, 850]
  }];

  const commentsSeries = [{
    name: 'Comments',
    data: [10, 20, 15, 30, 25, 40, 50, 65, 80, 75, 60, 55]
  }];

  return (
    <div className="profile-charts">
      <div className="chart-container">
        <h3>Posts Per Month</h3>
        <Chart options={chartOptions} series={postsSeries} type="line" width="500" height="200"/>
      </div>
      <div className="chart-container">
        <h3>Likes Per Month</h3>
        <Chart options={chartOptions} series={likesSeries} type="line" width="500" height="200" />
      </div>
      <div className="chart-container">
        <h3>Comments Per Month</h3>
        <Chart options={chartOptions} series={commentsSeries} type="line" width="500" height="200" />
      </div>
    </div>
  );
};

export default ProfileCharts;
