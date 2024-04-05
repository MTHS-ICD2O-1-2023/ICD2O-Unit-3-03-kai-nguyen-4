// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findVolumeClicked() {
  const radiusInput = parseFloat(document.getElementById("radius-entered").value)
  const volume = 4/3 * Math.PI * radiusInput ** 2
  document.getElementById("answer").innerHTML = "The volume is: " + volume.toFixed(2) + " mm<sup>3"
}
