
import os
import pandas as pd
import librosa
import glob
import pandas as pd
import numpy as np
import librosa.display
import matplotlib.pyplot as plt

import IPython.display as ipd
import librosa
ipd.Audio('C:\\Users\\Rahul Malhotra\\PycharmProjects\\maestro\\public\\Audio Files\\Kit 1\\ANTHEM KIT 03-002_bip 1.wav')
data, sampling_rate = librosa.load('C:\\Users\\Rahul Malhotra\\PycharmProjects\\maestro\\public\\Audio Files\\Kit 1\\ANTHEM KIT 03-002_bip 1.wav')
plt.figure(figsize=(12, 4))
librosa.display.waveplot(data, sr=sampling_rate)