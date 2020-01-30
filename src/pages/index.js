/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx, Box } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { LogoProcreate } from "../components/logo"

const IndexPage = () => (
    <Layout>
        <Box css={{ width: '50px' }}>
            <LogoProcreate />
        </Box>
        <Box sx={{ width: ['100%', '75%', '50%'] }}>
            <p sx={{ variant: 'styles.p', fontSize: ['3', '4'], mt: ['9'] }}>Want to build company value on personal values? We're here to help. Whether it's the next big thing, or your next small project, let know how we can help {'<3'}</p>
        </Box>
    </Layout>
)

export default IndexPage
