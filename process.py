import math
import os

task_dict = {
    "INIT" : {
        "NAME" : "INITIALISING" 
        "PRINT" : "Inintialsing ... "
        "DONE" : "Initialised."
        "DURATION" : 2
    }
    "BILD" : {
        "NAME" : "BUILD" 
        "PRINT" : "Building Main Components ... "
        "DONE" : "Built."
        "DURATION" : 10
    }
    "CMPL" : {
        "NAME" : "COMPILING" 
        "PRINT" : "Compliling main Components ... "
        "DONE" : "Compiled"
        "DURATION" : 10
    }
}

def progess_bar():
