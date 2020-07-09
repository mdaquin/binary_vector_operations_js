# Efficient binary vector operations in Javascript

This is a simple javascript class to represent potentially large  binary vectors as a set of integers, and realise operations such as intersection through basic binary operations for efficiency. This was developped based on the need of using formal concept analysis in javascript efficiently.

Usage is relatively simple: Instanciate the class with an actual binary vector (i.e. an array of booleans) and apply operations such as

'''
bn3 = bn1.intersection(bn2)
'''

