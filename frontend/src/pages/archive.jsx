
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Dropdown from 'react-bootstrap/Dropdown';

// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'

import Trophy from 'src/views/dashboard/Trophy'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// Sanity
import { createClient } from 'next-sanity'
import { useEffect, useState } from 'react';

const client = createClient({
  projectId: '6zrpvplh',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false
})

export async function getStaticProps() {
  const app = await client.fetch(`*[_type == "archive"]`)

  return {
    props: {
      app
    }
  }
}

function removeDuplicates(arr) {
  return arr.filter((item,
    index) => arr.indexOf(item) === index);
}


const Archive = ({ app }) => {

  const [options, setPptions] = useState(app.slice(0).reverse().map((data) => data?.tag))
  const [rawTags, setRawTags] = useState(app.slice(0).reverse().map((data) => data?.relatedTags.join(", ")))
  const [tags1, setTags1] = useState(rawTags.map((data) => data.split(", ")))
  const [tags, setTags] = useState(tags1.map((data) => data))

  let [uniqueTags, setUniqueTags] = useState([])

  useEffect(() => {
    tags.map((data) => {
      data.map((data1) => {
        setUniqueTags(arr => [...arr, data1])
      })
    })
  }, [])
  const [currentOption, setCurrentOption] = useState('All')
  const [currentTag, setCurrentTag] = useState('All')

  let clickedOption = (e) => {
    setCurrentOption(e.target.innerText)
  }

  let clickedTag = (e) => {
    setCurrentTag(e.target.innerText)
  }

  return (
    <ApexChartWrapper>

      <div className='mb-5 d-flex'>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Options
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={clickedOption} >All</Dropdown.Item>
            {removeDuplicates(options).map((data, index) => (
              <Dropdown.Item onClick={clickedOption} key={index}>{data}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className='me-3 btn btn-light' disabled>
          {currentOption}
        </button>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Tags
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={clickedTag} >All</Dropdown.Item>
            {removeDuplicates(uniqueTags).map((data, index) => (
              <Dropdown.Item onClick={clickedTag} key={index}>{data}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className='btn btn-light' disabled>
          {currentTag}
        </button>
      </div>

      <Grid container spacing={6}>
        {/* {app.length > 0 && ( */}
        <>
          {
            currentTag != "All" ?
              app.slice(0).reverse().map(app => (
                
                Array(app?.relatedTags)[0].includes(currentTag)?
                  <Grid item xs={12} md={4} key={app._id}>
                    <Trophy name={app?.name} desc={app?.desc} slug={app?.slug} content={app?.content} typCal={app?.typCal} url={"archive"} tag={app?.tag} relatedTags={app?.relatedTags} />
                  </Grid>
                  :
                  <></>
              ))
              :
              app.slice(0).reverse().map(app => (
                <Grid item xs={12} md={4} key={app._id}>
                  <Trophy name={app?.name} desc={app?.desc} slug={app?.slug} content={app?.content} typCal={app?.typCal} url={"archive"} tag={app?.tag} relatedTags={app?.relatedTags} />
                </Grid>
              ))
          }
        </>
        {/* )} */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Archive
