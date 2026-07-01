import deskIcon from './assets/icons8-desk-50.png';
import pipeline from './assets/icons8-water-control-64.png';
import scrapping from './assets/scrapping5.png'
import database from './assets/database.png'
import dateWarehouse from './assets/dataWarehouse.png'
import lipstick from './assets/lipstick.png'
import ai from './assets/ai.png'


export const projects = [
  {
    title: 'Muse Beauty Store',
    description:'An e-commerce frontend project for beauty products, focused on clean UI, product presentation, and smooth user experience.',
    link: 'https://muse-beauty.netlify.app/',
    icon: lipstick
  },
  {
    title: 'Support Desk',
    description: 'A platform that lets users submit complaints or feedback via a secure form and view submitted entries, ensuring transparency and efficient resolution.',
    link: 'https://celebrated-beignet-b1b3bc.netlify.app/',
    icon: deskIcon
  },
  {
    title: 'Orca Logic AI Landing Page',
    description: 'A frontend AI agency landing page showcasing a modern, and responsive interface with smooth Animations. Built to simulate a real business website with structured sections, interactive UI elements, and a strong focus on visual presentation and user experience.',    
    link: 'https://orca-logic.netlify.app/',
    icon: ai
  },
  {
    title: 'Pandas based EtL Pipeline',
    description: 'A modular Python ETL pipeline using Pandas, designed for maintainable and scalable data processing of raw CSV data.',
    link: 'https://github.com/Ahmed8eith/Pandas-based-ETl-pipeline',
    icon: pipeline
  },
  {
    title: 'Wuzzuf Web Scrapper',
    description: 'Python ETL pipeline that scrapes Data Engineer job listings from Wuzzuf using requests and BeautifulSoup, handles pagination, extracts structured job data, converts posting dates, cleans and removes duplicates with Pandas, and outputs a ready-to-analyze dataset in CSV format.',
    link: 'https://github.com/Ahmed8eith/Wuzzuf-Web-Scrapper',
    icon: scrapping
  },
  {
    title: 'SQL Relational Database',
    description: 'A relational database built with Microsoft SQL Server. Models a simple order management system with customers, employees, products, and orders.',
    link: 'https://github.com/Ahmed8eith/SQL-Relational-Database',
    icon: database
  },
  {
    title: 'SQL Star Schema Date Warehouse',
    description: 'A data warehouse built with Microsoft SQL Server as part of a practice assignment. Models waste collection trips using a star schema with trucks, stations, and dates as dimensions.',
    link: 'https://github.com/Ahmed8eith/SQL-Star-Schema-Database',
    icon: dateWarehouse
  }
];
