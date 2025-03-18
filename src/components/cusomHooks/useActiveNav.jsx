import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP,ScrollTrigger);

export const useActiveNav = () => {
   function  isInView(id) {
      if(id) {
        return ScrollTrigger.isInViewport(`#${id}`, 0.5)
      }else{
        return null
      }
    }
  return {
    isInView
  }
}

