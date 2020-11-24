import sys
import os

class Litterbox():
	def __init__(self, length, width, depth):
		self.length = length
		self.width = width
		self.depth = depth #take from highest side

	def getLength(self):
		return self.length

	def getWidth(self):
		return self.width

	def getDepth(self):
		return self.depth

	def setLength(self, number):
		self.length = number

	def setWidth(self, number):
		self.width = number

	def setDepth(self, number):
		self.depth = number

Lit1 = Litterbox(5, 10, 15)
print(Lit1.getWidth())
Lit1.setWidth(12)
print(Lit1.getWidth())



