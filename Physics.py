import time
import math

GROUND		= 0.0

speed 		= 0.0
tick 		= 0.0

class Object:
	def __init__(self, x, y):
		self.x = x
		self.y = y

def Gravity(object):
	speed = 9.8 * tick
	if object.y > GROUND:
		object.y -= speed
	if object.y <= GROUND:
		speed = 0.0
		object.y = 0.0

b = Object(100, 100000)

while True:
	tick += 1.0
	Gravity(b)
	time.sleep(0.1)
	print("POS {0} {1} SPEED {2}".format(math.floor(b.x), math.floor(b.y), tick * 9.8))