"use client"
import React from 'react'
import { NavBar } from '@/app/navbar/nav';
import { MenuBar } from '@/app/menubar/menu';
import Footer from "@/app/footer/footer";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {getAllPosts} from '@/lib/api1';
import PostHistorique from '@/components/ui/post/PostHistorique';
import { GetStaticProps } from 'next';

interface Post {
    postFormat: string;
    title: string;
    slidePost: string;
}

interface Props {
    allPosts: Post[];
}

const Historique: React.FC<Props> = ({ allPosts }) => {
    const videoPosts = allPosts.filter(post => post.postFormat === "video");

    return ( 
        <>
            {/* Utilisez videoPosts ici si nécessaire */}
            {/* <PostHistorique postData={videoPosts}/> */}
            <PostHistorique postData={allPosts}/>
        </>
    )
}

export default Historique;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const allPosts = getAllPosts([
        'postFormat',
        'title',
        'slidePost',
    ]) as Post[]; // Assurez-vous que getAllPosts renvoie un tableau de type Post

    return {
        props: { allPosts }
    }
}