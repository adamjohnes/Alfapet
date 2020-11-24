# ALFAPET Cat Pan Liner Dimensions Calculator

import sys
import os
import random

length = random.randint(10, 24)
width = random.randint(12, 20)
height = random.randint(6, 10)

class Litterbox():
	def __init__(self, length, width, height):
		self.length = length
		self.width = width
		self.height = height #take from highest side

	def getLength(self):
		return self.length

	def getWidth(self):
		return self.width

	def getHeight(self):
		return self.height

	def getDimensions(self):
		return str(self.length) + "x" + str(self.width) + "x" + str(self.height)

	def setLength(self, length):
		self.length = length

	def setWidth(self, width):
		self.width = width

	def setHeight(self, height):
		self.height = height

	def setDimensions(self, length, width, height):
		self.length = length
		self.width = width
		self.height = height

class Liner():
	def __init__(self, length, width):
		self.length = length
		self.width = width

	def getLength(self):
		return self.length

	def getWidth(self):
		return self.width

	def getDimensions(self):
		return str(self.length) + "x" + str(self.width / 2)

	def setLength(self, length):
		self.length = length

	def setWidth(self, width):
		self.width = width

	def setDimensions(self, length, width):
		self.length = length
		self.width = width

#Liner Sizes
reqMed = Liner(31, 17 * 2)
XLJumbo = Liner(37, 18 * 2)
superJumbo = Liner(40, 22 * 2)

def findClosestMatch(length, width, height):
	buffer = 1.5 #this buffer is the number that will give leniency to the sizes. I.e. If the dimensions were 12x10x18, the buffer would made it 12 + buffer x 10 + buffer x 18 + buffer.
	userLiner = Liner(length + (height * 2) + buffer, width + (height * 2) + buffer)
	if userLiner.length < 24 or userLiner.width < 14:
		print("Too small of dimensions.")
		print(userLiner.getDimensions())
		returnb
	elif userLiner.getLength() <= reqMed.getLength() and userLiner.getWidth() <= reqMed.getWidth():
		print("The correct liner size is Req-Med.")
		print(userLiner.getDimensions())
		return
	elif userLiner.getLength() <= XLJumbo.getLength() and userLiner.getWidth() <= XLJumbo.getWidth():
		print("The correct liner size is XL Jumbo.")
		print(userLiner.getDimensions())
		return
	elif userLiner.getLength() <= superJumbo.getLength() and userLiner.getWidth() <= superJumbo.getWidth():
		print("The correct linear size is Super Jumbo.")
		print(userLiner.getDimensions())
		return
	else:
		print("One of your sides is too large for our liners.")
		print(userLiner.getDimensions())
		return

L1 = Litterbox(length, width, height)
findClosestMatch(L1.length, L1.width, L1.height)





