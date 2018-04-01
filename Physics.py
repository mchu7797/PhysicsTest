import time
import math

GROUND      = 0.0
speed 	    = 0.0
tick 	    = 0.0

class Object:
	def __init__(self, x, y):
		self.x = x
		self.y = y

def Gravity(Obj):
	speed = 9.8 * tick
	if Obj.y > GROUND:
		Obj.y -= speed
	if Obj.y <= GROUND:
		speed = 0.0
		Obj.y = 0.0

b = Object(100, 100000)

while True:
	Gravity(b)
        tick += 0.1
	print("POS {0} {1} SPEED {2}".format(math.floor(b.x), math.floor(b.y), math.floor(tick * 9.8)))
        time.sleep(0.1)
